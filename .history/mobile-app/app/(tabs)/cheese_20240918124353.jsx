import { Pressable, Text, View } from 'react-native';
import {Link} from 'expo-router'
export default function Page() {
    return(
        <View>
<Text>Top-level page</Text>;
<Link href="/"  asChild>
<Pressable>
<Text>Index</Text>
</Pressable>
</Link>
  </View>

    )
    
}