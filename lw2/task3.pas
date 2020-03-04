PROGRAM SayHello(INPUT, OUTPUT);
USES
  Dos;
VAR
  Flag: CHAR;
  S: STRING;
  I, ILength: INTEGER;
BEGIN
  S := GetEnv('QUERY_STRING');
  Flag := 'N';
  ILength := LENGTH('NAME=');
  I := POS('NAME=', S);
  IF (I = 0) OR (I <> 1)
  THEN
    BEGIN
      ILength := ILength + 1;
      I := POS('&NAME=', S)
    END;
  IF I > 0
  THEN
    BEGIN
      S := COPY(S, I + ILength, LENGTH(S) - I - ILength + 1);
      I := POS('&', S);
      IF I > 0
      THEN
        S := COPY(S, 1, I - 1);
      Flag := 'Y'
    END;
  WRITELN(OUTPUT,'Content-Type: text/plain');
  WRITELN(OUTPUT);
  IF Flag = 'Y'
  THEN
    WRITELN(OUTPUT, 'Hello dear, ', S, '!')
  ELSE
    WRITELN(OUTPUT, 'Hello Anonymous!')
END.
