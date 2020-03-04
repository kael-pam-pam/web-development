PROGRAM GetVal(INPUT, OUTPUT);
USES
  Dos;

FUNCTION GetValue(Inp: STRING): STRING;
VAR
  Flag: CHAR;
  S: STRING;
  I, ILength: INTEGER;
BEGIN
  S := GetEnv('QUERY_STRING');
  Flag := 'N';
  IF Inp <> ''
  THEN
    BEGIN
      ILength := LENGTH(Inp+'=');
      I := POS(Inp+'=', S);
      IF (I = 0) OR (I <> 1)
      THEN
        BEGIN
          ILength := ILength+1;
          I := POS('&'+Inp+'=', S)
        END;
      IF I > 0
      THEN
        BEGIN
          S := COPY(S, I+ILength, LENGTH(S)-I-ILength+1);
          I := POS('&', S);
          IF I > 0
          THEN
            S := COPY(S, 1, I-1);
          Flag := 'Y'
        END
    END;
  IF Flag = 'Y'
  THEN
    GetValue := S
  ELSE
    GetValue := ''
END;

BEGIN
  WRITELN(OUTPUT,'Content-Type: text/plain');
  WRITELN(OUTPUT);
  WRITELN(OUTPUT, 'Param ', 'NAME', ' has value ', GetValue('NAME'));
  WRITELN(OUTPUT, 'Param ', 'AGE', ' has value ', GetValue('AGE'));
  WRITELN(OUTPUT, 'Param ', 'NUMBER', ' has value ', GetValue('NUMBER'));
  WRITELN(OUTPUT, 'Param ', 'YEAR', ' has value ', GetValue('YEAR'))
END.
