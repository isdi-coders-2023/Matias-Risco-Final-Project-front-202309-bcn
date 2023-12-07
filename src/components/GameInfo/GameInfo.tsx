import { GameStructure } from "../../store/feature/games/types";
import GameInfoStyled from "./GameInfoStyled";

interface GameInfoParamsStructure {
  game: GameStructure;
}

const GameInfo = ({
  game: {
    name,
    platforms,
    difficulty,
    languages,
    imageUrl,
    audience,
    gameTime,
    graphics,
    grind,
    tags,
  },
}: GameInfoParamsStructure): React.ReactElement => {
  return (
    <GameInfoStyled className="game-info">
      <h2 className="game-info__name">{name}</h2>
      <img
        className="game-info__image"
        src={imageUrl}
        alt={`game ${name}`}
        width="280"
        height="131"
      />
      <div className="game-info__description-container">
        <div className="game-info__description">
          <h3>Difficulty: </h3>
          <p>{difficulty}</p>
        </div>
        <div className="game-info__description">
          <h3>Game Time: </h3>
          <p>{gameTime}</p>
        </div>
        <div className="game-info__description">
          <h3>Graphics: </h3>
          <p>{graphics}</p>
        </div>
        <div className="game-info__description">
          <h3>Grind: </h3>
          <p>{grind}</p>
        </div>
        <div className="game-info__description">
          <h3>Audience: &nbsp;</h3>
          <p>{audience.join(", ")}</p>
        </div>
        <div className="game-info__description">
          <h3>Languages: &nbsp;</h3>
          <p>{languages.join(", ")}</p>
        </div>
        <div className="game-info__description">
          <h3>Plataforms: </h3>
          <p>{platforms.join(", ")}</p>
        </div>
        <div className="game-info__description">
          <h3>Tags: </h3>
          <p>{tags.join(", ")}</p>
        </div>
      </div>
    </GameInfoStyled>
  );
};

export default GameInfo;
