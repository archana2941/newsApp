import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  headerContainer: {
    // flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#EEEEEE',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 20,
  },
  listContainer: {
    flex: 8,
    marginVertical: 20,
  },
  articleWrapper: {
    flex: 1,
    minHeight: 60,
    marginBottom: 30,
    flexDirection: 'row'
  },
  articleTextWrapper: {
    flex: 3,
    marginRight: 5,
  },
  articleHeader: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  title: {
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  author: {
    fontSize: 14,
    color: 'gray'
  },
  image: {
    height: 80,
    width: 80,
    marginLeft: 15,
  }
});