/*
 * @Author: busyzz
 * @Date: 2021-08-27 15:06:18
 * @Description:
 */
function Storage(storage: Storage) {
  return {
    get length() {
      return storage.length;
    },
    key(index: number) {
      return storage.key(index);
    },
    getItem(key: string): any {
      let valueString = storage.getItem(key);
      if (!valueString) return null;
      try {
        return JSON.parse(valueString);
      } catch (e) {
        return null;
      }
    },
    setItem(key: string, data: any) {
      if (data === undefined) {
        data = null;
      }
      storage.setItem(key, JSON.stringify(data));
    },
    removeItem(key: string) {
      return storage.removeItem(key);
    },
    clear() {
      storage.clear();
    },
  };
}

export default Storage(localStorage);
