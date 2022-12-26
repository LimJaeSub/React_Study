import React, { useState } from "react";
import { dbService } from "fbase.js";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
function Nweet({ nweet, isOwner }) {
  console.log(nweet);
  const [isEdit, setIsEdit] = useState(false);
  const [newText, setNewText] = useState(nweet.text);
  const nweetText = doc(dbService, "nweets", `${nweet.id}`);
  const onDeleteClick = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // delete
      await deleteDoc(nweetText);
    }
  };
  const toggleEditing = () => setIsEdit((prev) => !prev);
  const onSubmit = async (e) => {
    // update
    e.preventDefault();
    await updateDoc(nweetText, {
      text: newText,
    });
    setIsEdit(false);
  };
  const onChange = (e) => {
    const { value } = e.target;
    setNewText(value);
  };
  return (
    <div>
      {isEdit ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newText}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweet.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Nweet;
