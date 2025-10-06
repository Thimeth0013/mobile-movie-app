import { icons } from '@/constants/icons';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const MovieCard = ({id, poster_path, title, vote_average, release_date, vote_count}: Movie) => {
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className="w-[29.7%]">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://placeholder.co/600*400/1a1a1a/ffffff.png`
            }}
            className="w-full h-44 rounded-lg border-2 border-light-300/30"
            resizeMode="cover"
          />

          <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>{title}</Text>
        
          <View className="flex-row justify-between">
          <View className="flex-row items-center gap-x-1">
            <Image source={icons.star} className="size-4"/>
            <Text className="text-xs font-bold text-white justify-between">{Math.round(vote_average / 2)}</Text>
          </View>
          <View className="flex-row items-center gap-x-1">
            <Image source={icons.person} className="size-4"/>
            <Text className="text-xs font-semibold text-white justify-between">{vote_count}</Text>
          </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="text-xs text-light-300 font-medium mt-1">{release_date?.split('-')[0]}</Text>
            {/* <Text className="text-xs font-medium text-light-300 uppercase mr-1">Movie</Text> */}
          </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard