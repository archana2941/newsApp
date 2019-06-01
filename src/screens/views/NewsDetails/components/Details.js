import React,{Component} from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
import styles from '../styles/styles';

class Details extends Component {
  header = (title,author,publishedAt) => (
    <View>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.metaContainer}>
        {
          !!author && <Text style={styles.author}>{author}</Text>
        }
        {
          !!publishedAt && <Text style={styles.publishedDate}>{publishedAt}</Text>
        }
      </View>
    </View>
  );

  render() {
    const {title,author,publishedAt,urlToImage,content} = this.props.data;
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        >
        <View style={styles.subContainer}>
          {this.header(title,author,publishedAt)}
          <View style={styles.contentWrapper}>
            {!!urlToImage &&
              <View>
                <Image source={{uri: urlToImage}} style={styles.image}/>
              </View>
            }
            {
              !!content &&
                <View style={styles.contentView}>
                  <Text style={styles.content}>{content}</Text>
                </View>
            }
          </View>
        </View>
      </ScrollView>
    )
  }
}
export default Details;