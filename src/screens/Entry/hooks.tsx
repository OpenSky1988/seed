import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, IconProps, TopNavigationAction } from '@ui-kitten/components';

import { store } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { RootState } from '../../store';
import { setFavorites } from '../../store/slices/questions';

const useBookmarkAction = (currentQuestionId: number, isBookmarked: boolean) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state: RootState) => state.questions);

  const onPress = async () => {
    const newFavorites = isBookmarked
      ? favorites.filter((item: number) => item !== currentQuestionId)
      : [...favorites, currentQuestionId];

    dispatch(setFavorites(newFavorites));
    await store(DEVICE_STORE_KEYS.FAVORITES, newFavorites);
  };

  const BookmarkOutlineIcon = (props: IconProps) => <Icon {...props} name="bookmark-outline" />;
  const BookmarkIcon = (props: IconProps) => <Icon {...props} name="bookmark" />;

  return () => (
    <TopNavigationAction
      icon={isBookmarked ? BookmarkIcon : BookmarkOutlineIcon}
      onPress={onPress}
    />
  );
};

export { useBookmarkAction };
