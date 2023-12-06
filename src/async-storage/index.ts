import AsyncStorage from '@react-native-async-storage/async-storage';
import { isObject, tryParseJSONObject } from '../utils';

const store = async (key: string, value: unknown) => {
  try {
    await AsyncStorage.setItem(key, isObject(value) ? JSON.stringify(value) : (value as string));
  } catch (e) {
    throw new Error(`Cannot put value to device storage ${e}`);
  }
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return tryParseJSONObject(value) || value;
  } catch (e) {
    throw new Error(`Cannot read value from device storage ${e}`);
  }
};

export { get, store };
