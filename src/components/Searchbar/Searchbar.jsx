import { List, Item, Link } from './Searchbar.styled';
function Searchbar() {
  return (
    <List>
      <Item>
        <Link href="/">Home</Link>
      </Item>
      <Item>
        <Link href="/tweets">Tweets</Link>
      </Item>
    </List>
  );
}

export default Searchbar;
