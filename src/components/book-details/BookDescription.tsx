
interface BookDescriptionProps {
  description: string;
  additionalText?: string;
}

const BookDescription = ({ description, additionalText }: BookDescriptionProps) => {
  return (
    <div className="prose max-w-none text-white/90">
      <p className="mb-4 leading-relaxed text-white/90">{description}</p>
      {additionalText && <p className="text-white/80 italic text-sm">{additionalText}</p>}
    </div>
  );
};

export default BookDescription;
