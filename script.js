function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function equa() {
  if (document.form.textview.value) {
    document.form.textview.value = eval(document.form.textview.value);
  }
}

function clean() {
  document.form.textview.value = "";
}

function back() {
  var str = document.form.textview.value;
  document.form.textview.value = str.substring(0, str.length - 1);
}

function sqrt() {
  document.form.textview.value = Math.sqrt(document.form.textview.value);
}

function pow() {
  document.form.textview.value = Math.pow(document.form.textview.value, 3);
}

function percent() {
  document.form.textview.value = document.form.textview.value / 100;
}
