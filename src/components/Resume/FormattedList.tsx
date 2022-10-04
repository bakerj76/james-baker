interface FormattedListProps {
    className: string;
    elements: (string | JSX.Element)[];
}

const FormattedList = ({ className, elements }: FormattedListProps) => (
    <ul className={className}>
        {elements.map((element, i) => (
            <li key={i}>
                <span>{element}</span>
            </li>
        ))}
    </ul>
);

export default FormattedList;
