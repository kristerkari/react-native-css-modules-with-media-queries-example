/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableHighlight,
  Linking,
} from "react-native";
import styles from "./styles.css";
import { Icon } from "./Icon";
import { Content, Tabs, HeaderNavIcons } from "./content";

const renderNavIcon = (icon, index) => {
  return (
    <TouchableHighlight
      className={styles.headerNavItem}
      onPress={() => {}}
      underlayColor="rgba(71,163,218,0.5)"
      key={index}
    >
      <Icon name={icon} size={16} className={styles.headerNavIcon} />
    </TouchableHighlight>
  );
};

const renderContent = (content, index) => {
  return (
    <View className={styles.mediabox} key={index}>
      <View className={styles.imgWrapper}>
        <Image
          source={content.image}
          className={styles.img}
          width="100%"
          height="auto"
        />
      </View>
      <View className={styles.textWrapper}>
        <Text className={styles.h3}>{content.title}</Text>
        <Text className={styles.p}>{content.body}</Text>
      </View>
    </View>
  );
};

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.initialSelected,
    };
  }

  render() {
    const renderTab = (tab, index) => {
      const isSelected = index === this.state.selected;
      return (
        <TouchableHighlight
          className={isSelected ? styles.liCurrent : styles.li}
          onPress={() => {
            if (isSelected) {
              return;
            }
            this.setState({ selected: index });
            this.props.onTabSelect(index);
          }}
          underlayColor="transparent"
          key={index}
        >
          <View className={styles.link}>
            <Icon
              name={tab.toLowerCase()}
              size={23}
              className={isSelected ? styles.currentIcon : styles.icon}
            />
            <Text
              className={
                isSelected ? styles.liCurrentLinkText : styles.linkText
              }
            >
              {tab}
            </Text>
          </View>
        </TouchableHighlight>
      );
    };

    return (
      <SafeAreaView className={styles.wrapper}>
        <ScrollView>
          <View className={styles.header}>
            <View className={styles.headerHeadings}>
              <Text className={styles.headerSpan}>BLUEPRINT</Text>
              <Text className={styles.h1}>Responsive Full Width Tabs</Text>
            </View>
            <View className={styles.headerNav}>
              {HeaderNavIcons.map(renderNavIcon)}
            </View>
          </View>
          <View className={styles.tabsWrapper}>
            <View className={styles.tabs}>
              <View className={styles.ul}>{Tabs.map(renderTab)}</View>
              <View className={styles.bottomBorder} />
            </View>
            <View className={styles.contentSection}>
              {Content[this.state.selected].map(renderContent)}
            </View>
            <View className={styles.info}>
              <Text className={styles.infoText}>
                Food Shapes/Icons by{" "}
                <Text
                  className={styles.infoLink}
                  onPress={() =>
                    Linking.openURL("http://psdblast.com/50-food-icon-set-psd")
                  }
                >
                  PsdBlast
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
