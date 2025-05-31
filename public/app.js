// opening undangan
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('openInvitationBtn').addEventListener('click', function () {
    document.getElementById('opening').style.display = 'none';
    document.getElementById('undangan').style.display = 'block';
    const song = document.getElementById('song');
    song.volume = 0.4;
    song.play();
    isPlaying = true;
    updatePlayButtonIcon();
  });
});

// expand rspv
function expandRSVP() {
  const rsvpSection = document.querySelector('.rsvp-section');
  const rsvpContainer = document.querySelector('.rsvp-container');
  rsvpSection.classList.toggle('expanded');
  rsvpContainer.classList.toggle('expanded');
}

// animasi gambar pengantin
document.addEventListener('DOMContentLoaded', function () {
  const brideImg = document.querySelector('.bride-img');
  const groomImg = document.querySelector('.groom-img');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Menambahkan kelas animate untuk memulai animasi
        entry.target.classList.add('animate');
      } else {
        // Menghapus kelas animate untuk mengulang animasi
        entry.target.classList.remove('animate');
      }
    });
  });

  // Mengamati gambar pengantin
  observer.observe(brideImg);
  observer.observe(groomImg);
});

// animasi akad nikah
document.addEventListener('DOMContentLoaded', function () {
  const akadNikahElements = document.querySelectorAll('.akad-nikah h2, .akad-nikah .akad-text');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Menambahkan kelas animate untuk memulai animasi
        entry.target.classList.add('animate');
      } else {
        // Menghapus kelas animate untuk mengulang animasi
        entry.target.classList.remove('animate');
      }
    });
  });

  akadNikahElements.forEach((element) => {
    observer.observe(element); // Mengamati setiap elemen
  });
});

//animasi gift
   document.addEventListener('DOMContentLoaded', function () {
    const giftTextElements = document.querySelectorAll('.gift h2  .gift .gift-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                entry.target.classList.add('animate');
            } else {

                entry.target.classList.remove('animate');
            }
        });
    });

    giftTextElements.forEach(element => {
        observer.observe(element); // Mengamati setiap elemen
    });
});

// animasi resepsi
document.addEventListener('DOMContentLoaded', function () {
  const resepsiElements = document.querySelectorAll('.resepsi h2, .resepsi .akad-text');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Menambahkan kelas animate untuk memulai animasi
        entry.target.classList.add('animate');
      } else {
        // Menghapus kelas animate untuk mengulang animasi
        entry.target.classList.remove('animate');
      }
    });
  });

  resepsiElements.forEach((element) => {
    observer.observe(element); // Mengamati setiap elemen
  });
});

document.addEventListener('DOMContentLoaded', function () {

  const elementsToAnimate = document.querySelectorAll('.akad-nikah h2, .akad-nikah .akad-text, .gallery-title, .gallery-title .gallery-text, .gift-section h2, .gift-section .gift-text');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {

              entry.target.classList.add('animate');
          } else {

              entry.target.classList.remove('animate');
          }
      });
  });

  elementsToAnimate.forEach(element => {
      observer.observe(element); // Observe each element
  });
});

// coundown resepsi
// Atur tanggal acara yang dituju
const targetDate = new Date('December 27, 2024 00:00:00').getTime();

// Fungsi hitung mundur
const countdownFunction = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Hitung waktu dalam hari, jam, menit, dan detik
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Tampilkan hasil pada elemen HTML
  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

  // Jika countdown selesai
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById('countdown').innerHTML = '<h3>Waktu telah tiba!</h3>';
  }
}, 1000);

// PENGINGAT
function setGoogleReminder() {
  const title = encodeURIComponent('Acara Pernikahan');
  const details = encodeURIComponent('Pernikahan Shinta & Irfan');
  const location = encodeURIComponent('Lokasi Pernikahan');
  const startDate = '20241227T000000Z'; // Tanggal mulai event (UTC)
  const endDate = '20241227T235900Z'; // Tanggal selesai event (UTC)

  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${startDate}/${endDate}`;

  // Buka link Google Calendar di tab baru
  window.open(url, '_blank');
}

// KEHADIRAN
document.addEventListener('DOMContentLoaded', function () {
  const attendanceYes = document.getElementById('yes');
  const attendanceNo = document.getElementById('no');
  const attendanceSelect = document.getElementById('attendance');

  function toggleAttendanceField() {
    if (attendanceNo.checked) {
      attendanceSelect.value = 0;
      attendanceSelect.style.display = 'none';
    } else {
      attendanceSelect.style.display = 'block';
    }
  }

  toggleAttendanceField();

  attendanceYes.addEventListener('change', toggleAttendanceField);
  attendanceNo.addEventListener('change', toggleAttendanceField);
});

// MODAL KEHADIRAN
function showConfirmation(event) {
  event.preventDefault(); // Mencegah submit form default
  document.getElementById('confirmationModal').style.display = 'block'; // Menampilkan modal
}

function closeModal() {
  document.getElementById('confirmationModal').style.display = 'none'; // Menyembunyikan modal
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function (event) {
  const modal = document.getElementById('confirmationModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// GIFT MODAL
function openModalGift(event) {
  var modal = document.getElementById('giftModal'); // Menampilkan modal
  modal.style.display = 'block';
}

function closeModalGift() {
  document.getElementById('giftModal').style.display = 'none'; // Menyembunyikan modal
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function (event) {
  const modal = document.getElementById('giftModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// rekening modal
function openModalRekening(event) {
  var modal = document.getElementById('rekeningModal'); // Menampilkan modal
  modal.style.display = 'block';
}

function closeModalRekening() {
  document.getElementById('rekeningModal').style.display = 'none'; // Menyembunyikan modal
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function (event) {
  const modal = document.getElementById('rekeningModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// MUSIC PLAY
const playButton = document.getElementById('playButton');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const buttonText = document.getElementById('buttonText');
let isPlaying = false;

// Mulai memutar musik saat halaman dimuat
// window.onload = function () {
//   song.volume = 0.4;
//   song.play();
//   isPlaying = true;
//   updatePlayButtonIcon();
// };

// Fungsi toggle untuk musik Play/Pause
playButton.addEventListener('click', function () {
  if (isPlaying) {
    song.pause();
  } else {
    song.play();
  }
  isPlaying = !isPlaying;
  updatePlayButtonIcon();
});

// Fungsi untuk memperbarui ikon pada tombol Play/Pause
function updatePlayButtonIcon() {
  if (isPlaying) {
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
    buttonText.textContent = 'Pause Music';
  } else {
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
    buttonText.textContent = 'Play Music';
  }
}

  // Fungsi untuk menyalin teks ke clipboard
  function copyToClipboard(text) {
    // Salin teks ke clipboard
    navigator.clipboard.writeText(text).then(() => {
      alert("Teks berhasil disalin ke clipboard!");
    }).catch(err => {
      console.error("Gagal menyalin teks:", err);
    });
  }
