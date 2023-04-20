function getGrade (s1, s2, s3) {
  const averageScore = (s1+s2+s3)/3
  switch(true){
      case (averageScore>=90): return 'A';
        break;
      case (averageScore>=80): return 'B';
        break;
      case (averageScore>=70): return 'C';
        break;
      case (averageScore>=60): return 'D';
        break;
      default: return 'F'
  }
    
}
