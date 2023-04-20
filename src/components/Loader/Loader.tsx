import { HashLoader } from "react-spinners"
import { MAIN_COLOR } from "../../constants/colors"

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <HashLoader color={MAIN_COLOR} speedMultiplier={1} size={65} />
    </div>
  )
}