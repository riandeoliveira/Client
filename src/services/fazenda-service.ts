import axios from "axios";

export abstract class FazendaService {
  public static async findAll(): Promise<void> {
    const response = await axios.post(
      "http://localhost:7000/api/tecnico/GrupoLocais/BuscarTudo",
      {
        fazendaId: "41559565-65a8-4170-aba2-ce724a2089be",
        page: 1,
        pageSize: 10,
        filtro: "",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSWQiOiI3MDdmMDg4ZS1mYzg3LTRkMDItYjIxNi1hMTdkZGVhZGQwNTkiLCJ1c3VhcmlvTm9tZSI6IlJpYW4gT2xpdmVpcmEiLCJuYmYiOjE2OTA3NjIxNDgsImV4cCI6MTY5MDg0ODU0OCwiaWF0IjoxNjkwNzYyMTQ4fQ.AMiJGj6NKApphfIJ2jz1oQPkJzXKEEHaSPROTIhJKo4",
        },
      },
    );

    console.log(response);
  }
}
