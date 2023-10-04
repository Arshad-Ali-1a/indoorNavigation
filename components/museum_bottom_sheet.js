import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  ScrollView,
} from "react-native";

import { connect } from "react-redux";
// import { BottomSheet, BottomSheetView } from "@gorhom/bottom-sheet";
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { confirmSource, confirmDestination } from "../redux/actions";
import store from "../redux/store";
import { setResult } from "../redux/actions";
import Carousel from "./image_carousel";

const MUSEUM_DATA = {
  ground: {
    0: {
      title: "Entrance",
      imageAvailable: false,
      description: "The entrance of the central block of the museum.",
    },
    1: {
      title: "Founder's Gallery",
      imageAvailable: [
        {
          id: 1,
          image: require("../assets/collection_images/ground/1/1(1).jpg"),
        },
        {
          id: 2,
          image: require("../assets/collection_images/ground/1/1(2).jpg"),
        },
        {
          id: 3,
          image: require("../assets/collection_images/ground/1/1(3).jpg"),
        },
        {
          id: 4,
          image: require("../assets/collection_images/ground/1/1(4).jpg"),
        },
        {
          id: 5,
          image: require("../assets/collection_images/ground/1/1(5).jpg"),
        },
        {
          id: 6,
          image: require("../assets/collection_images/ground/1/1(6).jpg"),
        },
      ],
      description:
        "The portraits and the other personal belongings of the family displayed in this gallery go a long way in recreating the life and time of the Salar Jung’s. The portraits of Mir Alam, Munir-ul-Mulk II Mohd. Ali Khan, Salar Jung I, Salar Jung II and a good number of oil paintings of Salar Jung III displaying various facets of his personality also adorn this gallery. The two masnads with golden zari-work, canopies on silver poles, used during the lifetime of Salar Jung III and his grandfather Salar Jung I, provide additional attraction to the gallery.",
    },
    2: {
      title: "Bronze and Printed Textiles",
      imageAvailable: [
        {
          id: 1,
          image: require("../assets/collection_images/ground/2/1.jpg"),
        },
        {
          id: 2,
          image: require("../assets/collection_images/ground/2/2.jpg"),
        },
        {
          id: 3,
          image: require("../assets/collection_images/ground/2/3.jpg"),
        },
        {
          id: 4,
          image: require("../assets/collection_images/ground/2/4.jpg"),
        },
      ],
      description:
        "India is celebrated all over the world for its rich tradition of textiles. The antiquity of the tradition dates back to the Indus Valley civilization, where cotton was found in excavations in Mohenjo-Daro. In this Gallery of Indian textiles an attempt has been made to acquaint the visitors with the rich traditions of textiles through varied specimens of fabrics, costumes and miscellaneous objects belonging to the last three centuries.The fabrics on display apart from cotton include Brocade, Himaru, Mashru, Muslin, silk, Velvet and Wool. A range of costumes from Pagdi, Safa, Chuga, Jama, Patka to Kamarbands, Sarees, Odhani and shawls are found in the gallery. To break the monotony of this display we have Huqqa bottoms from the Mughal period. The Museum has a rich collection of Kashmiri shawls of the 18th and 19th century. The shawls bespeak the rich traditions of the Kashmir textile industry for which India has attained universal appreciation. The shawls displayed here reveal complex and colorful textures. ‘Turanj’ pattern, is a distinctive style found in the shawls of Kashmir, there are four such shawls on display, in which three of them adorn this beautiful pattern as a border.",
    },
    3: {
      title: "Children's gallery",
      imageAvailable: false,
      description:
        "The Children’s Gallery is a unique feature of the Salar Jung Museum. It is a place where children can learn about the history of the museum and the family that built it. The gallery is designed to be interactive and fun. It is a place where children can learn about the history of the museum and the family that built it.",
    },
    4: {
      title: "Indian Sculpture Gallery",
      imageAvailable: false,
      description:
        "The Salar Jung Museum has some rich Indian stone sculptures though few in number. In ancient Indian sculptures we often come across sculptures with diverse traits reason being, sculptors who were proficient in the sculptural style of their own region were often moved from place to place in order to acquire knowledge of the art of other regions. The knowledge back then was passed from father to son, the sculptors had their own guilds and were given the highest order in society. The Indian sculpture gallery has forty-three stone sculptures ranging from 1st century B.C to 19th century A.D. The sculptures are made of sandstone, granite, limestone and marble. The gallery has twenty-four Hindu sculptures, six Jaina sculptures and five Buddhist sculptures. Some sculptures date back to as early as the 1st & 2nd century from the ‘Gandhara’ and ‘Mathura’ period. The Salar Jung museum has the privilege of housing two rare 'Schist' stone sculptures of Gandhara period and a couple of buff stone sculptures from the Sunga dynasty.",
    },
    5: {
      title: "Minor Arts Of South India",
      imageAvailable: false,
      description:
        "The study of Miniature painting in India is quite fascinating. Prior to the invention of paper in India, roughly in the 14th century AD, painting was practiced on cloth, wooden boards and palm leaves, apart from the earlier tradition of wall painting. Many illustrated manuscripts of Kalpasutra and Kalakacharya Katha and other Jain subjects have come down to the museum which belong to the Gujarat School of painting of 15th and 16th century. The Salar Jung museum possesses few interesting leaves of early Jaina Kalpasutras which bear illustrations in early style of Western Indian painting; these paintings are characterized by the limited landscape, basic colour usage, angular draughtsmanship and the projecting eyes in the paintings. The subject matter invariably relates to anecdotes from Jain mythology. A painted page from ‘Bala Gopala Stuti’ proves that even the works of Brahmanical cult were painted in the style of Jaina Kalpasutras.",
    },
    6: {
      title: "Moghal Glass Gallery",
      imageAvailable: false,
      description:
        "Mughal Glass constitutes a very prominent landmark in the history of glass in India. Under the reign of Akbar glass factories flourished but the best examples of Mughal glass were produced during the reigns of Jehangir & Shahjehan.Early Mughal glass is characterised by the use of opaque surfaces. Motifs used in the different periods help to date the objects by comparing to motifs found in miniature paintings and carpets of the same period. The main technique used in creating the decorations are gilding, enamelling and gold painting on the surface.",
    },
    7: {
      title: "Entrance junction",
      imageAvailable: false,
      description: "The entrance junction of the central block of the museum.",
    },
    8: {
      title: "Central block gallery",
      imageAvailable: false,
      description:
        "Central block gallery is the main gallery of the museum. It has a large collection of paintings, sculptures, textiles, and other artifacts. The gallery is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
    9: {
      title: "Central block left-gallery",
      imageAvailable: false,
      description:
        "The central block left-gallery is the left gallery of the central block of the museum. It has a collection of paintings, sculptures, textiles, and other artifacts. The gallery is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
    10: {
      title: "Ivory Carvings Gallery",
      imageAvailable: [
        {
          id: 1,
          image: require("../assets/collection_images/ground/10/1.jpg"),
        },
        {
          id: 2,
          image: require("../assets/collection_images/ground/10/2.jpg"),
        },
        {
          id: 3,
          image: require("../assets/collection_images/ground/10/3.jpg"),
        },
        {
          id: 4,
          image: require("../assets/collection_images/ground/10/4.jpg"),
        },
        {
          id: 5,
          image: require("../assets/collection_images/ground/10/5.jpg"),
        },
        {
          id: 6,
          image: require("../assets/collection_images/ground/10/6.jpg"),
        },
      ],
      description:
        "The Salar Jung museum has a vast collection of Ivory carvings from around the world. The collection gives a vivid account of the significant place of Ivory as a medium of art in the history of man’s craftsmanship. Though the greater part of the collection belongs to the recent times, yet it gives us a clear account of the remarkable skill attained by the carvers and their urge to produce pieces of outstanding quality. From the time of the Indus Valley civilization down to the 20th century, Ivory has been continuously used by the carvers of India as a medium to express their artistic talents due to its durability and delicacy.The term ‘Ivory’ not only means the tusks of elephants but also the tusks and teeth of Walrus, Narwhal and Hippopotamus. The important centers for Ivory carvings in India are Delhi, Mysore, Kerala and Visakhapatnam. The subject matter of Ivory carving reflects to some extent the ideology of the people of that particular period.In the collection of the museum, there are varied themes like figures - human, mythological, animals, chessmen, paper-cutters, furniture and paintings. One of the prized possession of this collection, which is appreciated by both scholars and laymen is the ‘Ivory mat’, whose warp and weft are of Ivory threads. The resultant effect though quite pleasing leaves one awestruck by the craftsman’s skill. An interesting chair duo which originally belonged to Tipu Sultan, gifted to him by King Louis XVI of France is an important part of the collection.",
    },
    11: {
      title: "Veiled Rebecca",
      imageAvailable: false,
      description:
        "The term marble owes its origin to the Greek word ‘Marmaros’ meaning stone or boulder. The statuary marble is marked by its ability to transmit light making it one of the most valuable marbles. The marble sculptures in Salar Jung Museum are sizeable in number though majority of them are copies of Greek mythological sculptures done by famous artists. The museum is a proud owner of one original marble sculptures titled “Veiled Rebecca” done in 1876 by sculptor G.B Benzoni of Milan. What makes this sculpture so extraordinary is, it features all the best qualities of the 19th century Neoclassical period. A perfectly proportionate beauty, a Jewish lady Rebecca stands in an alluring manner, enveloped in a transparent veil. Both the veil and the figure have been carved out of a single piece of marble. The folds, creases of the dress and the engaging curves of the figurine are finished with inimitable precision, lucidity and meticulousness. The sculpture was bought by Salar Jung I in 1876 during his visit to Rome. The statue has many admirers and visitors from all over the country come to see this masterpiece.",
    },
    12: {
      title: "Corner left gallery",
      imageAvailable: false,
      description:
        "The corner left gallery is the left gallery int the corner row of the museum. It has a collection of paintings, sculptures, textiles, and other artifacts. The gallery is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
    13: {
      title: "Arms And Armory Gallery",
      imageAvailable: [
        {
          id: 1,
          image: require("../assets/collection_images/ground/13/1.jpg"),
        },
        {
          id: 2,
          image: require("../assets/collection_images/ground/13/2.jpg"),
        },
        {
          id: 3,
          image: require("../assets/collection_images/ground/13/3.jpg"),
        },
        {
          id: 4,
          image: require("../assets/collection_images/ground/13/4.jpg"),
        },
      ],
      description:
        "“I (god) created iron which is very callous and useful for human beings.” This is a Quranic verse inscribed on a Persian sword in the collection of the Museum. In Persia, the term ‘Faulad-e-Hind’ has become synonymous with great strength. Indian steel has been regarded with great esteem and valued highly all over the world. The blades of ‘Damascus’, which maintained their pre-eminence even after the blades of ‘Toledo’, were in fact made of Indian steel.The collection of arms and armory in the Salar Jung museum is one of such rare treasures which consists of a fascinating and enormous quantity of old arms and fire-arms. There are more than 1200 objects of armory, as per the records in the Salar Jung museum. There are 196 fire-arms including match-lock, flint-lock, muzzle loading guns, dueling pistols and revolvers. The collection of arms and armory, excluding fire-arms consists of swords, daggers, shields, chest-plates, helmets and suit of amour. It is a vast collection dating back to the 16th century to the beginning of 20th century.The museum not only has a variant of arms of different parts of India but also possesses a sizable collection from other countries like Persia, Turkey, France, Spain, Nepal, England, Burma and Japan.The swords, daggers, tabars and helmets, all made of ‘Damascus’ steel and bearing marks and signatures of noted Persian and Turkish sword smiths, form a very significant part of the collection. There are some of the world famous Persian sword smith and cutlers represented in the collection who were independent firms which made to order the desired arms under the very seal of the firm.",
    },
    14: {
      title: "Metalware gallery",
      imageAvailable: false,
      description:
        "Metal Crafts includes metal work using Zinc, Copper, Brass, Silver, Gold. Some of the traditional ancient handicraft styles are Bidriware, Pembarthi Metal Craft, Dhokra, Kamrupi. The term ‘Bidriware’ originates from the township of Bidar, which is still the chief centre for the manufacture of the unique metalware. Due to its striking inlay artwork, Bidriware is an important export handicraft of India and is prized as a symbol of wealth. The metal used is a blackened alloy of zinc and copper inlaid with thin sheets of pure silver. Metal Crafts includes metal work using Zinc, Copper, Brass, Silver, Gold. Some of the traditional ancient handicraft styles are Bidriware, Pembarthi Metal Craft, Dhokra, Kamrupi. The term ‘Bidriware’ originates from the township of Bidar, which is still the chief centre for the manufacture of the unique metalware. Due to its striking inlay artwork, Bidriware is an important export handicraft of India and is prized as a symbol of wealth. The metal used is a blackened alloy of zinc and copper inlaid with thin sheets of pure silver.",
    },
    15: {
      title: "Metalware gallery junction",
      imageAvailable: false,
      description:
        "Metal Crafts includes metal work using Zinc, Copper, Brass, Silver, Gold. Some of the traditional ancient handicraft styles are Bidriware, Pembarthi Metal Craft, Dhokra, Kamrupi. The term ‘Bidriware’ originates from the township of Bidar, which is still the chief centre for the manufacture of the unique metalware. Due to its striking inlay artwork, Bidriware is an important export handicraft of India and is prized as a symbol of wealth. The metal used is a blackened alloy of zinc and copper inlaid with thin sheets of pure silver. Metal Crafts includes metal work using Zinc, Copper, Brass, Silver, Gold. Some of the traditional ancient handicraft styles are Bidriware, Pembarthi Metal Craft, Dhokra, Kamrupi. The term ‘Bidriware’ originates from the township of Bidar, which is still the chief centre for the manufacture of the unique metalware. Due to its striking inlay artwork, Bidriware is an important export handicraft of India and is prized as a symbol of wealth. The metal used is a blackened alloy of zinc and copper inlaid with thin sheets of pure silver.",
    },
    16: {
      title: "Central left junction",
      imageAvailable: false,
      description:
        "The central left junction is the left junction in the central row of the museum. It leads to a collection of paintings, sculptures, textiles, and other artifacts. The junction is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
    17: {
      title: "Central right junction",
      imageAvailable: false,
      description:
        "The central right junction is the right junction in the central row of the museum. It leads to a collection of paintings, sculptures, textiles, and other artifacts. The junction is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
    18: {
      title: "Bronze and Printed Textiles junction",
      imageAvailable: false,
      description:
        "India is celebrated all over the world for its rich tradition of textiles. The antiquity of the tradition dates back to the Indus Valley civilization, where cotton was found in excavations in Mohenjo-Daro. In this Gallery of Indian textiles an attempt has been made to acquaint the visitors with the rich traditions of textiles through varied specimens of fabrics, costumes and miscellaneous objects belonging to the last three centuries.The fabrics on display apart from cotton include Brocade, Himaru, Mashru, Muslin, silk, Velvet and Wool. A range of costumes from Pagdi, Safa, Chuga, Jama, Patka to Kamarbands, Sarees, Odhani and shawls are found in the gallery. To break the monotony of this display we have Huqqa bottoms from the Mughal period. The Museum has a rich collection of Kashmiri shawls of the 18th and 19th century. The shawls bespeak the rich traditions of the Kashmir textile industry for which India has attained universal appreciation. The shawls displayed here reveal complex and colorful textures. ‘Turanj’ pattern, is a distinctive style found in the shawls of Kashmir, there are four such shawls on display, in which three of them adorn this beautiful pattern as a border.",
    },
    19: {
      title: "Indian Sculpture Gallery junction",
      imageAvailable: false,
      description:
        "The Salar Jung Museum has some rich Indian stone sculptures though few in number. In ancient Indian sculptures we often come across sculptures with diverse traits reason being, sculptors who were proficient in the sculptural style of their own region were often moved from place to place in order to acquire knowledge of the art of other regions. The knowledge back then was passed from father to son, the sculptors had their own guilds and were given the highest order in society. The Indian sculpture gallery has forty-three stone sculptures ranging from 1st century B.C to 19th century A.D. The sculptures are made of sandstone, granite, limestone and marble. The gallery has twenty-four Hindu sculptures, six Jaina sculptures and five Buddhist sculptures. Some sculptures date back to as early as the 1st & 2nd century from the ‘Gandhara’ and ‘Mathura’ period. The Salar Jung museum has the privilege of housing two rare 'Schist' stone sculptures of Gandhara period and a couple of buff stone sculptures from the Sunga dynasty.",
    },
    20: {
      title: "Minor Arts Of South India junction",
      imageAvailable: false,
      description:
        "The study of Miniature painting in India is quite fascinating. Prior to the invention of paper in India, roughly in the 14th century AD, painting was practiced on cloth, wooden boards and palm leaves, apart from the earlier tradition of wall painting. Many illustrated manuscripts of Kalpasutra and Kalakacharya Katha and other Jain subjects have come down to the museum which belong to the Gujarat School of painting of 15th and 16th century. The Salar Jung museum possesses few interesting leaves of early Jaina Kalpasutras which bear illustrations in early style of Western Indian painting; these paintings are characterized by the limited landscape, basic colour usage, angular draughtsmanship and the projecting eyes in the paintings. The subject matter invariably relates to anecdotes from Jain mythology. A painted page from ‘Bala Gopala Stuti’ proves that even the works of Brahmanical cult were painted in the style of Jaina Kalpasutras.",
    },
    21: {
      title: "Founder's Gallery junction",
      imageAvailable: false,
      description:
        "The portraits and the other personal belongings of the family displayed in this gallery go a long way in recreating the life and time of the Salar Jung’s. The portraits of Mir Alam, Munir-ul-Mulk II Mohd. Ali Khan, Salar Jung I, Salar Jung II and a good number of oil paintings of Salar Jung III displaying various facets of his personality also adorn this gallery. The two masnads with golden zari-work, canopies on silver poles, used during the lifetime of Salar Jung III and his grandfather Salar Jung I, provide additional attraction to the gallery.",
    },
    22: {
      title: "Exit gate junction",
      imageAvailable: false,
      description: "The exit of the central block of the museum.",
    },
    23: {
      title: "Exit gate",
      imageAvailable: false,
      description: "The exit of the central block of the museum.",
    },
    24: {
      title: "Central block left-gallery junction",
      imageAvailable: false,
      description:
        "The central block left-gallery is the left gallery of the central block of the museum. It has a collection of paintings, sculptures, textiles, and other artifacts. The gallery is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
    25: {
      title: "Control room",
      imageAvailable: false,
      description: "CISF control room.",
    },
    26: {
      title: "Arms And Armory Gallery junction",
      imageAvailable: false,
      description:
        "“I (god) created iron which is very callous and useful for human beings.” This is a Quranic verse inscribed on a Persian sword in the collection of the Museum. In Persia, the term ‘Faulad-e-Hind’ has become synonymous with great strength. Indian steel has been regarded with great esteem and valued highly all over the world. The blades of ‘Damascus’, which maintained their pre-eminence even after the blades of ‘Toledo’, were in fact made of Indian steel.The collection of arms and armory in the Salar Jung museum is one of such rare treasures which consists of a fascinating and enormous quantity of old arms and fire-arms. There are more than 1200 objects of armory, as per the records in the Salar Jung museum. There are 196 fire-arms including match-lock, flint-lock, muzzle loading guns, dueling pistols and revolvers. The collection of arms and armory, excluding fire-arms consists of swords, daggers, shields, chest-plates, helmets and suit of amour. It is a vast collection dating back to the 16th century to the beginning of 20th century.The museum not only has a variant of arms of different parts of India but also possesses a sizable collection from other countries like Persia, Turkey, France, Spain, Nepal, England, Burma and Japan.The swords, daggers, tabars and helmets, all made of ‘Damascus’ steel and bearing marks and signatures of noted Persian and Turkish sword smiths, form a very significant part of the collection. There are some of the world famous Persian sword smith and cutlers represented in the collection who were independent firms which made to order the desired arms under the very seal of the firm.",
    },
    27: {
      title: "Veiled Rebecca junction",
      imageAvailable: false,
      description:
        "The term marble owes its origin to the Greek word ‘Marmaros’ meaning stone or boulder. The statuary marble is marked by its ability to transmit light making it one of the most valuable marbles. The marble sculptures in Salar Jung Museum are sizeable in number though majority of them are copies of Greek mythological sculptures done by famous artists. The museum is a proud owner of one original marble sculptures titled “Veiled Rebecca” done in 1876 by sculptor G.B Benzoni of Milan. What makes this sculpture so extraordinary is, it features all the best qualities of the 19th century Neoclassical period. A perfectly proportionate beauty, a Jewish lady Rebecca stands in an alluring manner, enveloped in a transparent veil. Both the veil and the figure have been carved out of a single piece of marble. The folds, creases of the dress and the engaging curves of the figurine are finished with inimitable precision, lucidity and meticulousness. The sculpture was bought by Salar Jung I in 1876 during his visit to Rome. The statue has many admirers and visitors from all over the country come to see this masterpiece.",
    },
    28: {
      title: "Canteen",
      imageAvailable: false,
      description: "The canteen of the museum.",
    },
    29: {
      title: "Canteen junction",
      imageAvailable: false,
      description: "The canteen of the museum.",
    },
  },
  first: {
    0: {
      title: "Entrance/Stairs",
      imageAvailable: false,
      description:
        "The entrance of the floor. The stairs lead to the ground floor of the museum.",
    },
    1: {
      title: "Carpet Gallery",
      imageAvailable: [
        {
          id: 1,
          image: require("../assets/collection_images/first/1/1.jpg"),
        },
        {
          id: 2,
          image: require("../assets/collection_images/first/1/2.jpg"),
        },
        {
          id: 3,
          image: require("../assets/collection_images/first/1/3.jpg"),
        },
        {
          id: 4,
          image: require("../assets/collection_images/first/1/4.jpg"),
        },
      ],
      description:
        "Persia has been renowned as the greatest carpet weaving center in the world, when the 16th century saw the zenith of the carpet industry under the Safavid dynasty, under the patronage of Shah Abbas (1568-1628 A.D). After the death of Shah Abbas, the carpet making art gradually lost its importance and value and reached its lowest ebb during the Afghan invasion of 1721 A.D. Persia did not recover the art until the 19th century.The Persian carpets occupies a unique place under the museum’s middle-eastern art collection. The utilitarian functions of carpets as floor coverings, door or wall hangings and other decorative purposes, do not deprive them of their artistic charms and quality. Exquisite specimens with intricate weaving and decked with different ornamental patterns, practically from all important looms of Persia namely, Kashan, Bokhara, Tabriz, Kirman, Shiraz, to mention a few are represented at the gallery.The museum houses few Bokhara carpets, woven by the Turkoman tribes having elongated octagon forms arranged in rows of diamond forms with straight lines connecting the centers of the octagon. In the center of each octagon is an eight-pointed star woven. These carpets can be dated back to the 18th century.",
    },
    2: {
      title: "Toys and Dolls Gallery",
      imageAvailable: false,
      description:
        "Toys and Dolls in India have been made since the Indus valley civilization. They are used in ceremonies, festivals and auspicious occasions. It is said that toys have an essential affinity to the Indian culture. The toys of different places have their own individual style and genius. Our craftsmen in older days used to provide children with clay models of wild animals, birds and deities. While playing with these toys children would naturally increase their knowledge and understanding about vital things, they not only have aesthetic appeal but also have a psychological impact on the growing children. Andhra Pradesh specialized in the production of variety of toys making use of every conceivable raw material available called Kondapally toys. Kondapally is a village few miles from Vijayawada. The toys of this place have established a great reputation all over the country and abroad. These toys are made of ‘Tella Poniki’ wood capable of being shaped into any form. The toys produced were influenced by birds, mythology and daily workers. The style is realistic but has a rare delicacy of touch with the faces being expressive.",
    },
    3: {
      title: "Children's gallery",
      imageAvailable: false,
      description:
        "The Children’s Gallery is a unique feature of the Salar Jung Museum. It is a place where children can learn about the history of the museum and the family that built it. The gallery is designed to be interactive and fun. It is a place where children can learn about the history of the museum and the family that built it.",
    },
    4: {
      title: "Indian Silver Gallery",
      imageAvailable: [
        {
          id: 1,
          image: require("../assets/collection_images/first/4/1.jpg"),
        },
        {
          id: 2,
          image: require("../assets/collection_images/first/4/2.jpg"),
        },
        {
          id: 3,
          image: require("../assets/collection_images/first/4/3.jpg"),
        },
        {
          id: 4,
          image: require("../assets/collection_images/first/4/4.jpg"),
        },
      ],
      description:
        "The silver ware room in the museum presents interesting filigree pieces from Karimnagar and Cuttack. Fine thin, threads like wires of silver are drawn and woven into intricate patterns like earrings, pendants and trays among others. Indian craftsmen have always showed exceptional skills in engraving, chiseling and ornamenting decorative silver articles. The earliest surviving examples of such work in precious metals, dates back to 50 BC where silver patera was discovered by a mason during an excavation of a Buddhist site in Jalalabad, Afghanistan. Sometimes in silver ware we find a small part that is gold plated for enameling purpose. Tarbha in Bolangir district of Odisha is noted for its exquisite silver ware. Examples of high quality silver ware in Kashmir are huqqas with deep cut ornamentations with motifs of lotus, chanar and trailing creepers.There are spice boxes, rose water sprinklers known as Gulab posh, caskets, huqqas, eating plates, tumblers and water pots all from Rajasthan. Gujarat especially Kutch is an outstanding example for its superior silver ware, their designs stand out due to its deep carving and moulding known as kacchikaam.",
    },
    5: {
      title: "Children's Gallery",
      imageAvailable: false,
      description:
        "The objects on display in the Children’s section of the museum are a testimony to the vast range of interests of Salar Jung III in collecting objects of assorted nature. The objects assimilated by him during his childhood are also on view in this gallery. The exhibits housed in the section provide informational education to children who come to visit the gallery. The gallery has a good number of bronze figures, porcelain objects, musical boxes, marble sculptures and toys from different parts of the world. Geisha dolls from Japan, a functional train-set from England and a set of the seven dwarfs from ‘Snow White and the seven dwarfs’ are a some of the assortments seen in this section. The gallery not only attracts the youth but also the elderly, a huge collection of toy soldiers arranged to give the viewer a fair idea of warfare during the Second World War. Apart from artillery and infantry, the gallery has toys depicting the Air-force, tanks and medical staff.Exquisitely modelled wild animals in bronze and metal such as Elephants, Rhinos, Tiger etc. are displayed. Clay models of domesticated animals, soap-stone carvings from Korea and Japan, objects decorated with Mother-of-pearl, sculptures depicting the different breed of dogs in metal and porcelain are found in the gallery.",
    },
    6: {
      title: "Arabic and Persian manuscripts",
      imageAvailable: false,
      description:
        "The Arabic and Persian manuscripts form one of the most valuable collections of the Museum. The museum houses the works of well-known calligraphers. The earliest manuscript on show is the ‘Holy Quran’ written on parchment in ‘Naskh’ script in Arabic on a rich indigo background, it is datable to 9th century A.D. Apart from this we have number of Holy Qurans both illuminated and embellished adorning the gallery. One can see exuberant Mesopotamian embellishment and calligraphy in the Quran written in ‘Naskh’ style and is said to have been attempted by Yaqut, the court calligrapher of the last Abbasid Caliph Mustasim Billah. It is a masterpiece, bearing the autograph of emperors Jahangir, Shah-Jahan and Aurangzeb.The book autographed by Emperor Jahangir who attested to its having been presented to his father Akbar, by his uncle Hakim Mirza while he was the king of Kabul, is a manuscript called “Book of Poems” attempted by Hafiz, the great Persian romantic poet.",
    },
    7: {
      title: "Entrance junction",
      imageAvailable: false,
      description: "The entrance junction of the central block of the museum.",
    },
    8: {
      title: "Egyptian Gallery",
      imageAvailable: false,
      description:
        "Middle East is represented through its art objects from Persia, Syria and Egypt covering a wide range of Carpets, Paper (manuscripts), Ceramics, Glass, Metal ware, Furniture, Lacquer etc. A range of figurative and narrative Persian carpets depicting stories of “Khusrau” is among the prized possessions of the museum. A major part of the Egyptian art at the museum are copies of the originals from important tombs of early Egyptian kings, but the objects give a glimpse into the art traditions and religious beliefs of ancient Egyptians. This is a copy of the throne of Tutankhamen, the original which is in Cairo Museum, datable to 1340 B.C. The scene on the back support shows the young king seated on a chair and his queen Ankesamun applying perfume on his shoulder.",
    },
    9: {
      title: "Jade Gallery",
      imageAvailable: [
        {
          id: 1,
          image: require("../assets/collection_images/first/9/1.jpg"),
        },
        {
          id: 2,
          image: require("../assets/collection_images/first/9/2.jpg"),
        },
        {
          id: 3,
          image: require("../assets/collection_images/first/9/3.jpg"),
        },
        {
          id: 4,
          image: require("../assets/collection_images/first/9/4.jpg"),
        },
        {
          id: 5,
          image: require("../assets/collection_images/first/9/5.jpg"),
        },
        {
          id: 6,
          image: require("../assets/collection_images/first/9/6.jpg"),
        },
      ],
      description:
        "Barring a few exceptions like the Prince of Wales Museum (CSMVS), Mumbai, Bharat Kala Bhavan, Varanasi and Fort museum, New Delhi; Indian museums by and large do not have Jade in their collection. In this context the Jade collection of the Salar Jung museum assumes a lot of significance. It is indeed impressive on account of the largeness of its size, variety and workmanship. Probably one of the biggest museum collections of jade in the world.Jade is a semi-precious stone very fine grained and varies in colour from almost pure white, emerald green to a dark blackish green. Due to its pleasing colour and extreme toughness Jade stone is very avidly chosen by craftsmen to give shape to their artistic notions. In olden days, kings and nobles considered it to be a matter of prestige to include a few Jade objects in their collection.According to scholars fashioning of Jade is especially associated with the courts of the Mughal emperors. Prior to the 16th century there was no tradition of Jade fashioning in India, although Indian artists had the expertise in shaping and carving harder stones like rock-crystal and agate.The orient art of Jade carving is said to have started under the patronage of Ulugh Beg, the grandson of Timur, In the 15th century at Samarkand. The Salar Jung museum has a carved Jade dagger belonging to Jahangir, who ascended the Mughal throne later. Shahjahan the successor of Jahangir, also encouraged Jade carvers and it was during his period that Jade carving reached its annex of perfection and attained full maturity.",
    },
    10: {
      title: "Bidri ware Gallery",
      imageAvailable: [
        {
          id: 1,
          image: require("../assets/collection_images/first/10/1.jpg"),
        },
        {
          id: 2,
          image: require("../assets/collection_images/first/10/2.jpg"),
        },
        {
          id: 3,
          image: require("../assets/collection_images/first/10/3.jpg"),
        },
        {
          id: 4,
          image: require("../assets/collection_images/first/10/4.jpg"),
        },
        {
          id: 5,
          image: require("../assets/collection_images/first/10/5.jpg"),
        },
        {
          id: 6,
          image: require("../assets/collection_images/first/10/6.jpg"),
        },
      ],
      description:
        "A very significant contribution other than in the field of paintings made by Persian and Near East art in the Indian cultural sphere is the application of exquisite decorations on articles of daily use. A major item in the latter category is ‘Bidari or Bidri ware’ originating from the city of Bidar, 80 kms from Hyderabad, now in Mysore, Karnataka. Bidri ware dates back nearly to four hundred years to the “Bahamani and Baridi dynasties.” Under whose patronage it flourished and towards the end of whose rule it reached its greatest perfection and beauty.The basic material is an alloy of Zinc, copper and lead, other than materials like Iron, or copper which were generally used by Persian craftsmen for inlay work. This combination of Zinc and copper does not rust nor corrodes but is brittle at the same time.The close of 18th century witnessed the bad days of Indian traditional art, as they came under disfavor of the nobility, who were the patrons of art for centuries. The market of Hyderabad was full of collections of priceless Bidri ware of earlier designs casts away from the houses of the aristocrats. They however caught the eye of British officers under the Nizam’s service. Like E.B Havel, who worked hard for the re-introduction of traditional Indian art in painting, also prof. E.E. Speight of Osmania university, Hyderabad who tried for the revival of Bidri ware. Bidri articles changed their shapes and decorative motif with the advent of a new age and demands of society.",
    },
    11: {
      title: "Kashmir Gallery",
      imageAvailable: false,
      description:
        "The state of Jammu and Kashmir has many Himalayan rivers flowing through it, most significant being Indus, Jhelum and Chenab. Due to the geographical location, climate, soil and altitude, the vegetation in the area ranges from tropical deciduous forests to temperate coniferous forests. The climate in this part of India, as any other depends upon the time of the year, location and the mountainous geography. Papier Mache is an age-old art found in Kashmir, this art has roots in ancient China. The steps that are involved in the making of Papier-Mache are soaking of paper in water till it disintegrates; then the paper is pounded and mixed with an adhesive solution, the resultant pulp is then shaped into molds and are allowed to set. Once the desired object is ready intricate designs in gold are engraved into the objects. The Kashmir gallery has a range of Papier Mache boxes, decorative items and vases.Embroidery is another specialty of Kashmir. The Kashmir jaali work is very popular. It takes months to complete thread work on one shawl, stole or bedspread. Artisans stitch decorative motifs of birds, maple trees and other decorative designs. The most popular and intricate thread work is ‘chain stitch’ that is done on shawls and clothes. The gallery has a variety of Pashmina and Sozni shawls on display.",
    },
    12: {
      title: "Corner left gallery",
      imageAvailable: false,
      description:
        "The corner left gallery is the left gallery int the corner row of the museum. It has a collection of paintings, sculptures, textiles, and other artifacts. The gallery is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
    13: {
      title: "Flora and fauna Gallery",
      imageAvailable: false,
      description:
        "The museum has a rich variety of art collections not only from India but from across the world. Salar Jung III himself was a great lover of animals and a keenly conscious environmentalist. His collection includes rare objects in media like pottery, metal, wood ivory and visuals depicting Flora and Fauna. The Nawab unlike his predecessors was not a habituated hunter, however he collected many items pertaining to wild life. In the 20th century he collected clay models of Rhinoceros, Hippopotamus and Elephants from Europe, India and China. The gallery also has European bronze replicas of Lions, Tigers, Lanky hound and Deer’s, a 19th century ivory showing a crocodile being attacked by a lion from Japan and other wild life artefacts.The Nawabs love for Fauna extended to domestic animals. He was very fond of cats and dogs, the gallery has replicas of Persian, Siamese cats and Japanese bull dogs and pugs. They all belong to 20th century Europe. He was very fond of horses and polo ponies, there are French bronze replicas of horses with classical figures lying on the ground holding the reins of the horse.Other than these the gallery has replicas of many birds in metal from the 19th century to replicas of reptiles all dating back to the 19th and 20th centuries.",
    },
    14: {
      title: "Utility ware Gallery",
      imageAvailable: false,
      description:
        "Utility Gallery might seem like a normal, less than interesting collection at a glance. But upon a focused look of the artifacts, one can feel the sense of intimacy that the artifacts here evoke as they were once the personal belongings and items of utility of someone from hundreds of years ago. Simple things such as lotas (globular water container) pooja stools, scroll covers, hookah (hubble-bubble) stands, nut-crackers and make-up boxes each have a charm of their own. To whom must it have belonged? How often did they use it? Were they happy to own it? Was it a cherished item of the owner or the household? Was it passed down from parent to child to grand child? Did they take good care of it? When did they give it away or stop using it? These are some of the questions one might ask. They might not be as jade or porcelain, but they are sure imaginatively made, ornate, sturdy and quirky! The big jewelry box, pandaan and spice boxes, the face-shaped makeup box, the Pichkari shaped like a woman and the samovar (water-heater) are few of the must-see objects. These objects transport the viewer to an Indian household of the 18th and 19th centuries.",
    },
    15: {
      title: "Utility ware Gallery junction",
      imageAvailable: false,
      description:
        "Utility Gallery might seem like a normal, less than interesting collection at a glance. But upon a focused look of the artifacts, one can feel the sense of intimacy that the artifacts here evoke as they were once the personal belongings and items of utility of someone from hundreds of years ago. Simple things such as lotas (globular water container) pooja stools, scroll covers, hookah (hubble-bubble) stands, nut-crackers and make-up boxes each have a charm of their own. To whom must it have belonged? How often did they use it? Were they happy to own it? Was it a cherished item of the owner or the household? Was it passed down from parent to child to grand child? Did they take good care of it? When did they give it away or stop using it? These are some of the questions one might ask. They might not be as jade or porcelain, but they are sure imaginatively made, ornate, sturdy and quirky! The big jewelry box, pandaan and spice boxes, the face-shaped makeup box, the Pichkari shaped like a woman and the samovar (water-heater) are few of the must-see objects. These objects transport the viewer to an Indian household of the 18th and 19th centuries.",
    },
    16: {
      title: "Central left junction",
      imageAvailable: false,
      description:
        "The central left junction is the left junction in the central row of the museum. It leads to a collection of paintings, sculptures, textiles, and other artifacts. The junction is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
    17: {
      title: "Central right junction",
      imageAvailable: false,
      description:
        "The central right junction is the right junction in the central row of the museum. It leads to a collection of paintings, sculptures, textiles, and other artifacts. The junction is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
    18: {
      title: "Toys and Dolls Gallery junction",
      imageAvailable: false,
      description:
        "Toys and Dolls in India have been made since the Indus valley civilization. They are used in ceremonies, festivals and auspicious occasions. It is said that toys have an essential affinity to the Indian culture. The toys of different places have their own individual style and genius. Our craftsmen in older days used to provide children with clay models of wild animals, birds and deities. While playing with these toys children would naturally increase their knowledge and understanding about vital things, they not only have aesthetic appeal but also have a psychological impact on the growing children. Andhra Pradesh specialized in the production of variety of toys making use of every conceivable raw material available called Kondapally toys. Kondapally is a village few miles from Vijayawada. The toys of this place have established a great reputation all over the country and abroad. These toys are made of ‘Tella Poniki’ wood capable of being shaped into any form. The toys produced were influenced by birds, mythology and daily workers. The style is realistic but has a rare delicacy of touch with the faces being expressive.",
    },
    19: {
      title: "Indian Silver Gallery junction",
      imageAvailable: false,
      description:
        "The silver ware room in the museum presents interesting filigree pieces from Karimnagar and Cuttack. Fine thin, threads like wires of silver are drawn and woven into intricate patterns like earrings, pendants and trays among others. Indian craftsmen have always showed exceptional skills in engraving, chiseling and ornamenting decorative silver articles. The earliest surviving examples of such work in precious metals, dates back to 50 BC where silver patera was discovered by a mason during an excavation of a Buddhist site in Jalalabad, Afghanistan. Sometimes in silver ware we find a small part that is gold plated for enameling purpose. Tarbha in Bolangir district of Odisha is noted for its exquisite silver ware. Examples of high quality silver ware in Kashmir are huqqas with deep cut ornamentations with motifs of lotus, chanar and trailing creepers.There are spice boxes, rose water sprinklers known as Gulab posh, caskets, huqqas, eating plates, tumblers and water pots all from Rajasthan. Gujarat especially Kutch is an outstanding example for its superior silver ware, their designs stand out due to its deep carving and moulding known as kacchikaam.",
    },
    20: {
      title: "Children's Gallery junction",
      imageAvailable: false,
      description:
        "The objects on display in the Children’s section of the museum are a testimony to the vast range of interests of Salar Jung III in collecting objects of assorted nature. The objects assimilated by him during his childhood are also on view in this gallery. The exhibits housed in the section provide informational education to children who come to visit the gallery. The gallery has a good number of bronze figures, porcelain objects, musical boxes, marble sculptures and toys from different parts of the world. Geisha dolls from Japan, a functional train-set from England and a set of the seven dwarfs from ‘Snow White and the seven dwarfs’ are a some of the assortments seen in this section. The gallery not only attracts the youth but also the elderly, a huge collection of toy soldiers arranged to give the viewer a fair idea of warfare during the Second World War. Apart from artillery and infantry, the gallery has toys depicting the Air-force, tanks and medical staff.Exquisitely modelled wild animals in bronze and metal such as Elephants, Rhinos, Tiger etc. are displayed. Clay models of domesticated animals, soap-stone carvings from Korea and Japan, objects decorated with Mother-of-pearl, sculptures depicting the different breed of dogs in metal and porcelain are found in the gallery.",
    },
    21: {
      title: "Carpet Gallery junction",
      imageAvailable: false,
      description:
        "Persia has been renowned as the greatest carpet weaving center in the world, when the 16th century saw the zenith of the carpet industry under the Safavid dynasty, under the patronage of Shah Abbas (1568-1628 A.D). After the death of Shah Abbas, the carpet making art gradually lost its importance and value and reached its lowest ebb during the Afghan invasion of 1721 A.D. Persia did not recover the art until the 19th century.The Persian carpets occupies a unique place under the museum’s middle-eastern art collection. The utilitarian functions of carpets as floor coverings, door or wall hangings and other decorative purposes, do not deprive them of their artistic charms and quality. Exquisite specimens with intricate weaving and decked with different ornamental patterns, practically from all important looms of Persia namely, Kashan, Bokhara, Tabriz, Kirman, Shiraz, to mention a few are represented at the gallery.The museum houses few Bokhara carpets, woven by the Turkoman tribes having elongated octagon forms arranged in rows of diamond forms with straight lines connecting the centers of the octagon. In the center of each octagon is an eight-pointed star woven. These carpets can be dated back to the 18th century.",
    },
    22: {
      title: "Central bottom junction",
      imageAvailable: false,
      description:
        "The central bottom junction is the bottom junction in the central row of the museum. It leads to a collection of paintings, sculptures, textiles, and other artifacts. The junction is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
    //23 not present
    24: {
      title: "Jade Gallery junction",
      imageAvailable: false,
      description:
        "Barring a few exceptions like the Prince of Wales Museum (CSMVS), Mumbai, Bharat Kala Bhavan, Varanasi and Fort museum, New Delhi; Indian museums by and large do not have Jade in their collection. In this context the Jade collection of the Salar Jung museum assumes a lot of significance. It is indeed impressive on account of the largeness of its size, variety and workmanship. Probably one of the biggest museum collections of jade in the world.Jade is a semi-precious stone very fine grained and varies in colour from almost pure white, emerald green to a dark blackish green. Due to its pleasing colour and extreme toughness Jade stone is very avidly chosen by craftsmen to give shape to their artistic notions. In olden days, kings and nobles considered it to be a matter of prestige to include a few Jade objects in their collection.According to scholars fashioning of Jade is especially associated with the courts of the Mughal emperors. Prior to the 16th century there was no tradition of Jade fashioning in India, although Indian artists had the expertise in shaping and carving harder stones like rock-crystal and agate.The orient art of Jade carving is said to have started under the patronage of Ulugh Beg, the grandson of Timur, In the 15th century at Samarkand. The Salar Jung museum has a carved Jade dagger belonging to Jahangir, who ascended the Mughal throne later. Shahjahan the successor of Jahangir, also encouraged Jade carvers and it was during his period that Jade carving reached its annex of perfection and attained full maturity.",
    },
    25: {
      title: "Control room",
      imageAvailable: false,
      description: "CISF control room.",
    },
    26: {
      title: "Flora and fauna Gallery junction",
      imageAvailable: false,
      description:
        "The museum has a rich variety of art collections not only from India but from across the world. Salar Jung III himself was a great lover of animals and a keenly conscious environmentalist. His collection includes rare objects in media like pottery, metal, wood ivory and visuals depicting Flora and Fauna. The Nawab unlike his predecessors was not a habituated hunter, however he collected many items pertaining to wild life. In the 20th century he collected clay models of Rhinoceros, Hippopotamus and Elephants from Europe, India and China. The gallery also has European bronze replicas of Lions, Tigers, Lanky hound and Deer’s, a 19th century ivory showing a crocodile being attacked by a lion from Japan and other wild life artefacts.The Nawabs love for Fauna extended to domestic animals. He was very fond of cats and dogs, the gallery has replicas of Persian, Siamese cats and Japanese bull dogs and pugs. They all belong to 20th century Europe. He was very fond of horses and polo ponies, there are French bronze replicas of horses with classical figures lying on the ground holding the reins of the horse.Other than these the gallery has replicas of many birds in metal from the 19th century to replicas of reptiles all dating back to the 19th and 20th centuries.",
    },
    27: {
      title: "Kashmir Gallery junction",
      imageAvailable: false,
      description:
        "The state of Jammu and Kashmir has many Himalayan rivers flowing through it, most significant being Indus, Jhelum and Chenab. Due to the geographical location, climate, soil and altitude, the vegetation in the area ranges from tropical deciduous forests to temperate coniferous forests. The climate in this part of India, as any other depends upon the time of the year, location and the mountainous geography. Papier Mache is an age-old art found in Kashmir, this art has roots in ancient China. The steps that are involved in the making of Papier-Mache are soaking of paper in water till it disintegrates; then the paper is pounded and mixed with an adhesive solution, the resultant pulp is then shaped into molds and are allowed to set. Once the desired object is ready intricate designs in gold are engraved into the objects. The Kashmir gallery has a range of Papier Mache boxes, decorative items and vases.Embroidery is another specialty of Kashmir. The Kashmir jaali work is very popular. It takes months to complete thread work on one shawl, stole or bedspread. Artisans stitch decorative motifs of birds, maple trees and other decorative designs. The most popular and intricate thread work is ‘chain stitch’ that is done on shawls and clothes. The gallery has a variety of Pashmina and Sozni shawls on display.",
    },
    //28 not present
    29: {
      title: "Central bottom-left junction",
      imageAvailable: false,
      description:
        "The central bottom-left junction is the bottom-left junction in the central row of the museum. It leads to a collection of paintings, sculptures, textiles, and other artifacts. The junction is divided into 3 sections. The first section has a collection of paintings, the second section has a collection of sculptures, and the third section has a collection of textiles and other artifacts.",
    },
  },
};

const MuseumBottomSheet = (props) => {
  const bottomSheetRef = React.useRef(null);
  const snapPoints = ["18%", "100%"];

  React.useEffect(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, [props.destination]); // not props.destination.tempId because I want it to pop up when the user clicks on same destination again.

  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={bottomSheetRef}
      enablePanDownToClose={true}
      backgroundStyle={{
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
      }}
    >
      <BottomSheetScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 0,
          }}
        >
          <Text
            style={{
              flex: 1,
              marginLeft: "5%",
              fontSize: 20,
              textTransform: "capitalize",
              fontWeight: "bold",
              letterSpacing: 1,
            }}
            // adjustsFontSizeToFit={true}
          >
            {MUSEUM_DATA[props.floor][props.destination.tempId]?.title ||
              "A place"}
            {console.log(props.destination.tempId)}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button
              title="Navigate to"
              onPress={() => {
                store.dispatch(
                  confirmDestination({ id: props.destination.tempId })
                );
                // bottomSheetRef.current?.close();
              }}
            />
            <Button
              title="Set as Source"
              onPress={() => {
                store.dispatch(confirmSource({ id: props.destination.tempId }));
                // bottomSheetRef.current?.close();
              }}
            />
          </View>
        </View>
        <View style={{ marginTop: "2%", marginRight: "1%" }}>
          {MUSEUM_DATA[props.floor][props.destination.tempId]
            ?.imageAvailable ? (
            <Carousel
              data={
                MUSEUM_DATA[props.floor][props.destination.tempId]
                  ?.imageAvailable
              }
            />
          ) : null}
        </View>
        <View
          style={{
            margin: "3%",
            marginTop: "7%",
            borderWidth: 1,
            borderRadius: 47,
          }}
        >
          <Text
            style={{
              margin: "1%",
              fontSize: 17,
              textAlign: "center",
            }}
          >
            {MUSEUM_DATA[props.floor][props.destination.tempId]?.description ||
              "Very nice place."}
          </Text>
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const mapStateToProps = (state) => ({
  source: state.source,
  destination: state.destination,
  result: state.result,
});

export default connect(mapStateToProps)(MuseumBottomSheet);

export { MUSEUM_DATA };
