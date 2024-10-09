import { Text, View } from 'react-native';
import {Link} from "expo-router";

export default function Page() {
  return (
    <View>
<Text>This is a page about sndhwich</Text>
<Link href="/index">My Index Page!</Link>
<Link href="/cheese">My cheese page!</Link>
<h2>hi</h2>
</View>
  )
}