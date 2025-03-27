import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function Styling() {
    return (
        <SafeAreaView style={styles.container}>
            {/* İlk bölüm: Ortada bir metin içeren kutu */}
            <View style={styles.container2}>
                <Text style={styles.text}>Hola</Text>
            </View>

            {/* İkinci bölüm: Ekran genişliğinin %80'ini kaplayan bir buton */}
            <View style={styles.container3}>
                <TouchableOpacity style={styles.button} activeOpacity={0.5}>
                    <Text style={styles.text}>Tıkla</Text>
                </TouchableOpacity>
            </View>

            {/* Üçüncü bölüm: Görsel, başlık ve açıklama içeren bir kart */}
            <View style={styles.container4}>
                <View style={styles.cardContainer}>
                    {/* Kartın üst kısmı: Görsel alanı */}
                    <View style={styles.cardImgArea}>
                        <Image
                            source={{ uri: 'https://cdn2.a101.com.tr/dbmk89vnr/CALL/Image/get/vOsfLrRtD1_500x500.png' }}
                            style={styles.image}
                        />
                    </View>
                    {/* Kartın alt kısmı: Metin alanı */}
                    <View style={styles.cardTxtArea}>
                        <Text style={styles.text}>Ekmek</Text>
                        <Text style={styles.cardTxt}>Lorem ipsum dolor sit amet</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#919191'
    },
    container2: { 
        flex: 1,
        backgroundColor: '#fff8eb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container3: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcd991'
    },
    container4: { 
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
        borderWidth: 4, // Kartın kenarlık kalınlığı
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
