import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faInstagram,
  faLinkedin,
  faSquareGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.socialIcons}>
        <View style={styles.oneIcon}>
          <a href="https://web.facebook.com/sasindudilhara.disanayaka" target="_blank">
            <FontAwesomeIcon icon={faSquareFacebook} size="lg" style={styles.icon} />
          </a>
        </View>

        <View style={styles.oneIcon}>
          <a href="https://www.instagram.com/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="lg" style={styles.icon} />
          </a>
        </View>


        <View style={styles.oneIcon}>
          <a href="https://www.linkedin.com/in/sasindu-disanayaka-055980220/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg" style={styles.icon} />
          </a>
        </View>

        <View style={styles.oneIcon}>
          <a href="https://github.com/SaSinDu10" target="_blank">
            <FontAwesomeIcon icon={faSquareGithub} size="lg" style={styles.icon} />
          </a>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    //backgroundColor: '#808080', // Customize your footer's background color
    //paddingVertical: 20,
    //paddingHorizontal: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    marginHorizontal: 50,
    color: '#fff', // Customize the icon color
  },
  oneIcon: {
    padding: 10,
  },
});

export default Footer;