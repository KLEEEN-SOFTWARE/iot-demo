import { google } from 'googleapis';
import jwt from '../../../jwt.keys.json';

const auth = new google.auth.JWT(
  jwt.client_email,
  null,
  jwt.private_key,
  'https://www.googleapis.com/auth/spreadsheets',
  null,
  jwt.private_key_id,
);

google.options({ auth });

export const sheets = google.sheets('v4');
export const spreadsheetId = '1Pq5fWbDDbvRdXgh9thChVJiuubj4-u9h5GRssC1V6hs';
