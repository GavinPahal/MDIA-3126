import { Text, View } from 'react-native';
import {Link} from "expo-router";

export default function Page() {
  return (
    <View>
<Text>This is a page about sandhwhic</Text>
<Link href="/index">My Index Page!</Link>
<Link href="/cheese">My Cheese Page!</Link>
</View>
  )
}