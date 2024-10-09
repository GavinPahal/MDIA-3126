import { View } from 'react-native';
import { Link } from 'expo-router';


export default function Page() {
  return (
    <View>
      <Link href="/sandwhich">Sandwhich</Link>
      <Link href="/cheese">Cheese</Link>
      {/* ...other links */}
    </View>
  );
}
