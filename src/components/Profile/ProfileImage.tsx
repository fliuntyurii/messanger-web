import { useRandomColor } from '../../hooks/useRandomColor';

type Props = {
  name: string,
  image: string | undefined,
  color: string
}

export const ProfileImage = ({ name, image, color }: Props) => {

  return (
    <div className="profile-image">
      {
        image ?
          <img src={image} alt={name} />
        :
          <div
            className="empty"
            style={{
              backgroundColor: `rgb(${color})`
            }}
          >
            {name[0]}
          </div>
      }
    </div>
  );
}