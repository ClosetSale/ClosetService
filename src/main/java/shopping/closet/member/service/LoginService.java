package shopping.closet.member.service;

import shopping.closet.member.domain.Member;
import shopping.closet.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class LoginService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Optional<Member> loginIdCheck(Member member) {
        return memberRepository.findByLoginId(member);
    }


    public Member passwordCheck(Member member) {
        return memberRepository.findByLoginId(member)
                .filter(m -> bCryptPasswordEncoder.matches(member.getPassword(), m.getPassword()))
                .orElse(null);
    }

}