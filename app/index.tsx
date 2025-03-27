import { View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {/* İçinde bir Text bileşeni bulunan bir View oluşturun ve metni hem yatay hem de dikey olarak View içinde ortalayın. */}
            <View style={styles.container2}>
                <Text style={styles.text}>Hola</Text>
            </View>

            {/* Bir cihazda ekran genişliğinin %80'ini kaplayan bir buton tasarlayın ve ekran boyutuna göre tutarlı en-boy oranını koruyacak şekilde düzenleyin. */}
            <View style={styles.container3}>
                <TouchableOpacity style={styles.button} activeOpacity={.5}>
                    <Text style={styles.text}>Tıkla</Text>
                </TouchableOpacity>
            </View>

            {/* Bir görsel, başlık ve açıklama içeren basit bir kart oluşturun. Kart padding ve border sahibi olmalı. */}
            <View style={styles.container4}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImgArea}>
                        <Image
                            source={{ uri: 'https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/vOsfLrRtD1_500x500.png' }}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.cardTxtArea}>
                        <Text style={styles.text}>Ekmek</Text>
                        <Text style={styles.cardTxt}>Lorem ipsum dolor sit amet </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: { // kapsayıcımız
        flex: 1,
        backgroundColor: '#919191'
    },
    container2: { // 1. görevin yapılacagı alan
        flex: 1,
        backgroundColor: '#fff8eb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container3: { // 2. gorevin yapılacagı alan
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcd991'
    },
    container4: { // 3. gorevin yapılacagı alan
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#f9a326'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%',
        width: '80%', // Ekran genişliğinin %80'i
        backgroundColor: '#fabc4f',
        borderRadius: 6,
    },
    text: {
        color: '#b23e0b',
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardContainer: {
        width: 120,
        height: 180,
        backgroundColor: '#fdecc8',
        borderRadius: 22,
        borderWidth: 4, // Kenarlık kalınlığı
        borderColor: '#fcd991', // Kenarlık rengi
    },
    cardImgArea: {
        flex: 1,
        padding: 8,
    },
    cardTxtArea: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 8,
        paddingRight: 8,
    },
    cardTxt: {
        fontSize: 12,
        color: '#d75d08',
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 16,
    },


});


// flexDirection: 'column',
// justifyContent: 'center',
// alignItems: 'center',