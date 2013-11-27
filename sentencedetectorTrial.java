// importo la classe per leggere un file
import java.io.FileInputStream;
// importo la classe per le eccezzioni da lanciare nel caso il file non sia leggibile (e.g., causa permessi) o non esiste
import java.io.IOException;
// importo la classe generica per gli stream in input perche' SentenceModel richiede tale tipo come parametro
import java.io.InputStream;

// importo la classe per la rilevazione delle frasi
import opennlp.tools.sentdetect.SentenceDetectorME;
// importo la classe per il tipo di modello delle frasi (che varia da lingua a lingua)
import opennlp.tools.sentdetect.SentenceModel;  

// la classe e' pubblica e quindi invocabile da altre classi. Il nome della classe deve corrispondere al nome del file .java. N.B. e' case-sensitive!
public class sentencedetectorTrial {
	// nota che dentro i metodi statici puoi fare riferimento solo a membri statici
	// questo significa che ogni istanza di questa classe avra' i membri modelIn e model condivisi
	// in realta' non e' un grosso problema (a parte limitare il riuso del codice) perche' stiamo utilizzando
	// questo programma come una utility a linea di comando
	// Nota che i membri li ho definiti private, perche' non voglio siano accessibili da altre classi
	private static InputStream modelIn;
	private static SentenceModel model;

	// String[] args sarebbero i parametri passati a linea di comando, che in questo caso non usiamo
	// Nota che in un programma java ci puo' essere uno e un solo main.
	// tipicamente si sviluppa una classe semplice che contiene il main e che richiama una composizione di altre classi,
	// ma per semplicita' qui ho fatto tutto unito
	public static void main(String[] args) {
		// carico il file con il modello delle frasi
		try {
			modelIn = new FileInputStream("models/en-sent.bin");
		} catch (IOException e) {
			e.printStackTrace();
		}
		// devo inizializzare la variabile prima del blocco try/catch perche' sia visibile al di fuori di esso! 
		// Questa cosa si chiama "scope" delle variabili ed e' un argomento abb tosto
		try { 
			model = new SentenceModel(modelIn);
		// se non riesco a leggere il file lancio una eccezzione
		} catch (IOException e) {
			e.printStackTrace();
		// la clausola finally serve per eseguire delle operazioni prima di chiudere il programma, in modo da minimizzare i danni di un crash.
		// In questo caso si chiude il file aperto in lettura.
		} finally {
			if (modelIn != null) {
				try {
					// chiudo il file!
					modelIn.close();
				}  catch (IOException e) {}
			}
		}

		//After the model is loaded the SentenceDetectorME can be instantiated
		SentenceDetectorME sentenceDetector = new SentenceDetectorME(model);

		//The Sentence Detector can output an array of Strings, where each String is one sentence
		String sentences[] = sentenceDetector.sentDetect("  First sentence. Second sentence. ");

                for(String str: sentences)
                    System.out.println(str);

	}
}


