type Props = {
  currentPage: string;
}

export const Header = ({ currentPage }: Props) => {
  return (
    <div className="header-wrapper">
      <div className="header-logo">
        <img src="logo.png" alt="logo" width="70px" />
      </div>
    </div>
  );
}