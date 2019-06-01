import React, {Component} from 'react';
import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

class Dashboard extends Component {
  header = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>
        Your Daily Read
      </Text>
    </View>
  );
  showDetails = (item) => {
    this.props.showDetails(item);
  }
  renderItem = ({item}) => {
    const {author,title,urlToImage} = item;
    return (
    <TouchableOpacity
      onPress={() => this.showDetails(item)}
    >
      <View style={{ flex: 1,
        minHeight: 60,
        marginBottom: 30,
        flexDirection: 'row'}}>
      <View style={styles.articleTextWrapper}>
        {
          !!title && (
            <View style={styles.title}>
              <Text style={styles.articleHeader}>{title}</Text>
            </View>
          )
        }
        {
          !!author &&
          (
            <Text style={styles.author}>{author}</Text>
          )
        }
      </View>
      {
        !!urlToImage && (
          <View>
            <Image source={{uri: urlToImage}} style={styles.image}/>
          </View>
        )
      }
      </View>
    </TouchableOpacity>
  )};

  listView = () => (
    <View style={styles.listContainer}>
      <FlatList
        keyExtractor={(item,index) => index}
        data={this.props.data.articles}
        renderItem={this.renderItem}
      />
    </View>
  )
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          {this.header()}
          {this.listView()}
        </View>
      </View>
    )
  }
}

export default Dashboard;