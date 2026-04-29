import { useParams } from "react-router-dom";
import GameDetailCard from "../../components/GameDetailCard/GameDetailCard";

export default function Details() {
  const { id } = useParams();
  const gameId = Number(id);

  return (
    <div>
      <GameDetailCard id={gameId} />
    </div>
  );
}