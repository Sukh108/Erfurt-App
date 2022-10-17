/**
 * 
 * @format
 */
import React,{useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../components/header/Header';
import styles from './styles';
function Info(props) {
  const [selected,setSelected] =useState("name")
  return (
    <View style={styles.container}>
      <Header onChangeFilterstate={(value)=>{setSelected(value)}}
/>
       <ScrollView>
       <View style={styles.body}>
      <Text style={styles.header}>Impressum</Text>
      <Text style={styles.header}>Angaben gemäß §5TMG</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Weimann/Schmidt GbR</Text>
      <Text style={styles.text}>Juri-Gagarin-Ring 116 B</Text>
      <Text style={styles.text}>99084 Erfurt</Text>
      </View>
      <Text style={styles.boldtext}>Vertreten durch:</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Frank Weimann und Axel Schmidt</Text>
      </View>
      <Text style={styles.header}>Kontakt</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Telefon: 0361-6431269</Text>
      <Text style={styles.text}>Telefax: O361-6431294</Text>
      <Text style={styles.text}> E-Mail: kontakt@wa-express.de</Text>
      </View>
      <Text style={styles.header}>Umsatzsteuer-ID</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Umsatzsteuer-ldentifikationsnummer gemälß 27 a</Text>
      <Text style={styles.text}>Umsatzsteuergesetz:</Text>
      <Text style={styles.text}>DE150133340</Text>
      </View>
      <Text style={styles.header}>Redaktionell Verantwortlicher </Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Frank Weimann und Axel Schmidt</Text>
      </View>
      <Text style={styles.header}>EU-Streitschlichtung</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Die Europäische Kommission stellt eine</Text>
      <Text style={styles.text}>Plattform zur Online-Streitbeilegung (0S) bereit</Text>
      <Text style={styles.text}>https://ec.europa.euLconsumers/odr.</Text>
      <Text style={styles.text}>Unsere E-Mail-Adresse finden Sie oben im</Text>
      <Text style={styles.text}>Impressum.</Text>
      </View>
      <Text style={styles.header}>Verbraucherstreitbeilegung/</Text>
      <Text style={styles.header}>Universalschlichtungsstelle</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Wir sind nicht bereit oder verpflichtet,</Text>
      <Text style={styles.text}>an Streitbeilegungsverfahren vor einer:</Text>
      <Text style={styles.text}>Verbraucherschlichtungsstelle teilzunehmen.</Text>
      </View>
      <Text style={styles.header}>Haftung für Inhalte</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</Text>
      </View>
      <Text style={styles.header}>Haftung für Links</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</Text>
      </View>
      <Text style={styles.header}>Urheberrecht</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
      </Text>
      </View>
      <Text style={styles.header}>Datenschutz</Text>
      <Text style={styles.header}>Allgemeine Hinweise und</Text>
      <Text style={styles.header}>Pflichtinformationen</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}>Die folgenden Hinweise geben einen einfachen Überblick darüber, was die Erfurt-App leistet. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer Datenschutzerklärung. Die Erfurt-App ermöglicht Ihnen Informationen über die Stadt Erfurt und verschiedene Gewerbetreibende, Geschäfte, Firmen und Ausflugsziele zu erlangen. Darüber hinaus können Sie diese Ziele über eine Routenplanung erreichen. Unter bestimmten Voraussetzungen können Sie am Bonusprogramm einzelner Partner der Erfurt-App teilnehmen. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir beharndeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie der oben angegebenen Datenschutzerklärung. Wenn Sie die Erfurt-App benutzen, werden verschiedene personenbezogene Daten erhoben. Die Nutzung der Erfurt-App ist auch ohne personenbezogene Daten möglich.</Text>
      </View>
      <Text style={styles.header}>Push-Nachrichten</Text>
      <View style={styles.textbox}>
      <Text style={styles.text}> Sie können den Empfang von Push-Benachrichtigungen aktivieren. Dadurch wird ein Push-Token erstellt. Der Dienst wird angeboten durch die OneSignal Inc. 2194 Esperanca Avenue, Santa Clara, CA 95054, USA (im Folgenden ,OneSignal"). Die Datenschutzinfornmationen und weitere Informationen von OneSignal finden Sie hier. Den Dienst verwenden wir, um Ihnen Push-Benachrichtigungen (z.B. aktuelle Informationen) senden zu können. Stimmen Sie der Standortbestimmung zu, so greift die Erfurt-App auch auf Ihren Standort zu um Ihnen weiterhin Push-Nachrichten zu senden. Den Dienst können Sie jederzeit unter Einstellungen aktivieren bzw. deaktivieren. Eine Nutzung der Erfurt-App ist auch ohne Push-Benachrichtigungen möglich. Die Verarbeitung Ihrer Daten erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1 Bst. a) DSGVO) in den Empfang der Push-Nachrichten. Der Schutz von personenbezogenen Daten bei der Ubermittlung in die USA kann nicht gewährleistet werden.</Text>
      </View>
      </View>
       </ScrollView>
    </View>
  );
}



export default Info;