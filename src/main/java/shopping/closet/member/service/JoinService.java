package shopping.closet.member.service;


import shopping.closet.member.domain.Member;
import shopping.closet.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class JoinService {
    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public String save(Member member) {


        //아이디 중복 방지
        Optional<Member> fmember = memberRepository.findByLoginId(member);
        if (fmember.isPresent()) {
            return "loginId";
        }

        //이메일 중복 방지
        Optional<Member> emember = memberRepository.findByName(member);
        if (emember.isPresent()) {
            return "name";
        }

        member.setMemberId(UUID.randomUUID().toString());
        member.setPassword(passwordEncoder.encode(member.getPassword()));
        memberRepository.save(member);

        return null;
    }
}