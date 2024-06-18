import userData from "../../userData.json";
import Profile from "../Profile/Profile";
import friends from "../../friends.json";
import FriendList from "../FriendList/FriendList";
import transactions from "../../transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <>
      <Profile profileUser={userData} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
