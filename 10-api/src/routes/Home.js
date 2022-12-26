import React, { useEffect, useState } from "react";
import { dbService } from "fbase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";
import Nweet from "components/Nweet";
function Home({ userObj }) {
  const [nweet, setNweet] = useState("");
  const [nweetlist, setNweetlist] = useState([]);
  // Read(목록 받아오기)
  const getnweetlist = async () => {
    // 1. collection 쿼리 받아오기
    const q = query(collection(dbService, "nweets"));
    // 2. getDocs()로 스냅샷 받아오기
    const querysnapshot = await getDocs(q);
    // 3. 불변성을 지키기 위해 새로운 객체 생성 후 setState로 값 넣어주기
    querysnapshot.forEach((doc) => {
      const inputnweetobj = {
        ...doc.data(), // 이거 해주면 doc의 데이터 전부 풀어냄
        id: doc.id, // obj마다 id값 넣어줌
        // 스냅샷에서의 doc는 index역할을 한다.
        //
      };
      setNweetlist((prev) => [inputnweetobj, ...prev]);
    });
  };

  useEffect(() => {
    // 1.getDoc로 불러오는 방법
    // getnweetlist();

    // 2. 스냅샷으로 불러오는 방법
    const q = query(collection(dbService, "nweets"));
    onSnapshot(q, (snapshot) => {
      // nweets가 변하는 모든 순간에 스냅샷이 터짐
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweetlist(nweetArray);
    });
  }, []);
  //Create(목록에 추가)
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "nweets"), {
        text: nweet,
        createdAt: Date.now(),
        creatorId: userObj.uid,
        // 해당 글 목록의 생성자
        // 현재 로그인 한 user가 글을 생성하면 add될때 uid가 추가됨.
      });
      // "nweets" 라는 컬렉션에 필드(nweet,createAt)을 추가하는 코드
    } catch (error) {
      //console.error("Error adding document: ", error);
    }
    setNweet("");
  };
  const onChange = (e) => {
    const { value } = e.target;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="hello"
          maxLength={120}
        />
        <input type="submit" value="tweet" />
      </form>
      <div>
        {nweetlist.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweet={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
