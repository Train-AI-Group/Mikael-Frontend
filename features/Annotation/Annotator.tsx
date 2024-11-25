import * as Annotorious from "@recogito/annotorious-openseadragon";
import OpenSeaDragon from "openseadragon";
import { useEffect, useRef, useState } from "react";
import '@annotorious/annotorious/annotorious.css';
import "@recogito/annotorious-openseadragon/dist/annotorious.min.css";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Annotator = () => {
  const [viewer, setViewer] = useState<OpenSeaDragon.Viewer | null>(null);
  const [annotorious, setAnnotorious] = useState<Annotorious.Annotorious | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [annotations, setAnnotations] = useState<any[]>([]);

  const inputRef = useRef<HTMLInputElement>(null); // Ref for the file input

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === 'string') {
          setImageSrc(result);
        } else if (result instanceof ArrayBuffer) {
          const blob = new Blob([result], { type: event.target.files![0].type });
          setImageSrc(URL.createObjectURL(blob));
        }
        setAnnotations([]);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };


  useEffect(() => {
    let osdViewer: OpenSeaDragon.Viewer | null = null;
    let ann: any = null;

    const initAnnotorious = () => {
      if (!imageSrc) return;

      osdViewer = OpenSeaDragon({
        id: "openseadragon-viewer",
        animationTime: 0.5,
        blendTime: 0.1,
        constrainDuringPan: true,
        gestureSettingsMouse: { clickToZoom: false },
        maxZoomPixelRatio: 5,
        prefixUrl: "//openseadragon.github.io/openseadragon/images/",
        tileSources: {
          type: "image",
          url: imageSrc,
        },
      });

      setViewer(osdViewer);

      ann = Annotorious(osdViewer);
      ann.setAnnotations(annotations);

      ann.on('createAnnotation', (annotation: any) => {
        setAnnotations([...annotations, annotation]);
      });
      ann.on('updateAnnotation', (annotation: any) => {
        setAnnotations(annotations.map(a => a.id === annotation.id ? annotation : a));
      });

      ann.on('deleteAnnotation', (annotation: any) => {
        setAnnotations(annotations.filter(a => a.id !== annotation.id));
      });

      setAnnotorious(ann);
    };


    initAnnotorious();

    return () => {
      if (osdViewer) osdViewer.destroy();
      if (ann) ann.destroy();
    };

  }, [imageSrc, annotations]);

  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(annotations));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "annotations.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <Card className="m-2 p-4 w-fit space-y-2">
      <h1 className="text-xl font-bold text-center">Image Annotation</h1>
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"  // Hidden file input
        ref={inputRef}       // Assign the ref
      />
      <div className="flex gap-4">
        <Button onClick={() => inputRef.current?.click()}>
          Upload Image
        </Button>
        <Button onClick={handleDownload} variant="outline">
          Download Annotations
        </Button>
      </div>
      {imageSrc && (
        <div className="map-container" id="map">
          <div
            id="openseadragon-viewer"
            style={{ width: "50vw", height: "75vh" }}
          ></div>
          <h2>✏️ Press Shift to draw annotations</h2>
        </div>
      )}

    </Card>
  );
};

export default Annotator;
