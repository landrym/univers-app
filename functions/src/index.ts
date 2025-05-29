// functions/src/index.ts
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
export const addmessage = onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;

  // Log a message using the logger
  logger.info("Received message:", original); // <-- Ici on utilise 'logger'

  // Write the original message to Firestore (example, assuming you have Firestore setup)
  // const writeResult = await getFirestore().collection('messages').add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: xxx added.`});
  // NOTE: The Firestore part is commented out in the default example,
  // but the onRequest and logger usage are usually there.
}); 
