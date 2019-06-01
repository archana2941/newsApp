import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    marginHorizontal: 12,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 20,
  },
  metaContainer: {
    flexDirection: 'row',
  },
  author: {
    fontSize: 14,
    marginRight: 10
  },
  publishedDate: {
    fontSize: 14,
    color: '#AAAAAA'
  },
  contentWrapper: {
    backgroundColor: '#EEEEEE',
    marginTop: 20
  },
  image: {
    height: 300,
  },
  contentView: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  content: {
    fontSize: 14,
    lineHeight: 18
  }
});