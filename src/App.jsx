import user from 'data/user';
import statistics from 'data/statistics';
import friends from 'data/friends';
import transactions from 'data/transactions';
import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import style from './App.module.scss';

export const App = () => {
  const title = 'Upload stats';

  return (
    <div className={style.main}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={title} stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
