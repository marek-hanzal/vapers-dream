import {getOptionalToken} from "@leight-core/server";
import {GetServerSideProps} from "next";

export default function Index() {
	return null;
};

export const getServerSideProps: GetServerSideProps = async ctx => {
	const token = await getOptionalToken(ctx);
	console.log("token???", token);
	return {
		redirect: token ? {destination: "/lab"} : {destination: "/public"},
		props: {},
	};
};
