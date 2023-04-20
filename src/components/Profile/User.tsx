import { useRandomColor } from "../../hooks/useRandomColor";
import { TUser } from "../../types/User.type";
import { ProfileImage } from "./ProfileImage";

type Props = {
  user: TUser
}

export const User = ({ user }: Props) => {
  const color = useRandomColor();
  const fields = [
    { field: 'Name', value: user.name },
    { field: 'Bio', value: user.bio },
    { field: 'Username', value: user.username },
    { field: 'Email', value: user.email },
  ];

  return (
    <div className="user-wrapper">
      <ProfileImage 
        name={user?.name}
        image={user?.image}
        color={color}
      />
      <div className="user-info">
        {
          fields.map((el: any) => (
            <div>
              <p>
                {el.field}
              </p>
              &nbsp;
              <span 
                style={{
                  color: `rgb(${color})`
                }}
              >·</span>
              &nbsp;
              <p>
                {el.value}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  );
}