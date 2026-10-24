import type { PremiumPhoto } from "@/data/premium-photos";
export default function PhotoCredit({ photo }: { photo: PremiumPhoto }) {
  return (
    <div className="pf-photo-credit">
      <p>
        <a href={photo.source} target="_blank" rel="noopener noreferrer">
          Foto: {photo.author}
        </a>
        <span> · </span>
        <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">
          {photo.license}
        </a>
      </p>
      <p>{photo.note}</p>
    </div>
  );
}
