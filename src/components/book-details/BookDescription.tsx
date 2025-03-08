
interface BookDescriptionProps {
  description: string;
  additionalText?: string;
}

const BookDescription = ({ description, additionalText }: BookDescriptionProps) => {
  return (
    <div className="prose max-w-none">
      <p className="mb-4">{description}</p>
      {additionalText && <p>{additionalText}</p>}
    </div>
  );
};

export default BookDescription;
