import './Options.css';

interface Props {
  title: string;
}

const Options = ({ title }: Props) => {
  return <div className="OptionsContainer">{title} Page</div>;
};

export default Options;
