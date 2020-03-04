PROGRAM SarahRever(INPUT, OUTPUT);
USES
  Dos;
VAR
  Flag: CHAR;
  S: STRING;
  I, ILength: INTEGER;
BEGIN
  S := GetEnv('QUERY_STRING');
  Flag := 'N';
  ILength := LENGTH('lanterns=');
  I := POS('lanterns=', S);
  IF (I = 0) OR (I <> 1)
  THEN
    BEGIN
      ILength := ILength + 1;
      I := POS('&lanterns=', S)
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
  IF Flag = 'Y'
  THEN
    BEGIN
      Flag := 'N';
      IF S = '1'
      THEN
        Flag := 'S'
      ELSE
        IF S = '2'
        THEN
          Flag := 'L'
    END;
  WRITELN(OUTPUT,'Content-Type: text/plain');
  WRITELN(OUTPUT);
  IF Flag = 'S'
  THEN
    WRITELN(OUTPUT, 'The British are coming by sea.')
  ELSE
    IF Flag = 'L'
    THEN
      WRITELN(OUTPUT, 'The British are coming by land.')
    ELSE
      WRITELN(OUTPUT, 'Sarah didn''t say.')
END.
