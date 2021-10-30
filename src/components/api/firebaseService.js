import { useHistory } from "react-router-dom";

export const useApi = () => {
  const history = useHistory();
  const uploadCard = async (cardInfo) => {
    const result = fetch(
      "https://reacting-d4273-default-rtdb.firebaseio.com/cards.json",
      {
        method: "POST",
        body: JSON.stringify(cardInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/axolotl");
    });
    return result;
  };

  const getCards = async () => {
    const preview = await fetch(
      "https://reacting-d4273-default-rtdb.firebaseio.com/cards.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data;
      });
    const result = [];

    for (const key in preview) {
      const card = {
        id: key,
        ...preview[key],
      };

      result.push(card);
    }
    return result;
  };

  return { uploadCard, getCards };
};
