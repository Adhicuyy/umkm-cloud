import supabase from '../lib/supabase';

export async function getServerSideProps() {
  // Menarik data dari tabel Supabase
  const { data, error } = await supabase.from('your_table_name').select('*');
  
  if (error) {
    console.error('Error fetching data:', error);
    return { props: { data: [] } };  // Kembalikan data kosong jika ada error
  }

  // Mengembalikan data sebagai props
  return {
    props: {
      data
    }
  };
}

const HomePage = ({ data }) => {
  return (
    <div>
      <h1>Data dari Supabase</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
