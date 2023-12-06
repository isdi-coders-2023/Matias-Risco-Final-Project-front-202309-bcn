import GameForm from "../../components/GameForm/GameForm";
import AddGamePageStyled from "./AddGamePageStyled";

const AddGamePage = (): React.ReactElement => (
  <AddGamePageStyled>
    <h1>Add Game</h1>
    <GameForm title="New Game" />
  </AddGamePageStyled>
);

export default AddGamePage;
