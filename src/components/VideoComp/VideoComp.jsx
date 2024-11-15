import "./VideoComp.css";

export default function VideoComp({ source, styling }) {
  return (
    <video
      src={source}
      muted
      controls
      className={styling}
    ></video>
  );
}
