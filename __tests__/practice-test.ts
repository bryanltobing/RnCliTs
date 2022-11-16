const colorForDueDate = (date: string) => {
  if (new Date(date).getTime() > new Date().getTime()) {
    return 'green';
  }
  return 'red';
};

it('given a date in the past, colorForDueDate() returns red', () => {
  // arrange (given)
  const date = '2020-11-15';

  // act (when)
  const act = colorForDueDate(date);

  // assert (then)
  const response = 'red';

  expect(act).toBe(response);
});

export {};
